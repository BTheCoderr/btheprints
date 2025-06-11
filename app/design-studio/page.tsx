'use client';

import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Text, Image as KonvaImage, Rect, Transformer } from 'react-konva';
import ColorPicker from '../components/design/ColorPicker';
import TextControls from '../components/design/TextControls';
import ProductView from '../components/design/ProductView';
import type { KonvaEventObject } from 'konva/lib/Node';
import type Konva from 'konva';

interface DesignElement {
  id: string;
  type: 'text' | 'image' | 'shape';
  x: number;
  y: number;
  text?: string;
  fontSize?: number;
  fill?: string;
  width?: number;
  height?: number;
  rotation?: number;
  src?: string;
}

interface HistoryState {
  elements: DesignElement[];
  selectedElement: string | null;
}

export default function DesignStudio() {
  const [selectedProduct, setSelectedProduct] = useState({
    id: '1',
    name: '514 Buffalo Plaid Jacket',
    color: 'white',
    printArea: { width: 400, height: 500 }
  });
  
  const [elements, setElements] = useState<DesignElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [productColor, setProductColor] = useState('white');
  const stageRef = useRef<Konva.Stage>(null);
  
  // History management
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [error, setError] = useState<string | null>(null);

  // Add state to history
  const addToHistory = (elements: DesignElement[], selectedElement: string | null) => {
    const newStep = currentStep + 1;
    const newHistory = history.slice(0, newStep);
    newHistory.push({ elements, selectedElement });
    setHistory(newHistory);
    setCurrentStep(newStep);
  };

  useEffect(() => {
    // Initialize history with empty state
    if (history.length === 0) {
      addToHistory([], null);
    }
  }, []);

  const undo = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      const prevState = history[prevStep];
      setElements(prevState.elements);
      setSelectedElement(prevState.selectedElement);
      setCurrentStep(prevStep);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      const nextStep = currentStep + 1;
      const nextState = history[nextStep];
      setElements(nextState.elements);
      setSelectedElement(nextState.selectedElement);
      setCurrentStep(nextStep);
    }
  };

  const addText = () => {
    try {
      const newText: DesignElement = {
        id: `text-${Date.now()}`,
        type: 'text',
        x: 100,
        y: 100,
        text: 'Double click to edit',
        fontSize: 24,
        fill: '#000000',
      };
      const newElements = [...elements, newText];
      setElements(newElements);
      setSelectedElement(newText.id);
      addToHistory(newElements, newText.id);
    } catch (err) {
      setError('Failed to add text element');
      console.error(err);
    }
  };

  const addShape = (shapeType: 'rectangle' | 'circle') => {
    try {
      const newShape: DesignElement = {
        id: `shape-${Date.now()}`,
        type: 'shape',
        x: 100,
        y: 100,
        width: 100,
        height: shapeType === 'circle' ? 100 : 50,
        fill: '#000000',
      };
      const newElements = [...elements, newShape];
      setElements(newElements);
      setSelectedElement(newShape.id);
      addToHistory(newElements, newShape.id);
    } catch (err) {
      setError('Failed to add shape');
      console.error(err);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image size must be less than 5MB');
      }

      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        throw new Error('Invalid image type. Please use JPG, PNG, or GIF');
      }

      const reader = new FileReader();
      reader.onerror = () => {
        throw new Error('Failed to read image file');
      };

      reader.onload = (event) => {
        const img = new window.Image();
        img.src = event.target?.result as string;
        img.onerror = () => {
          setError('Failed to load image');
        };
        img.onload = () => {
          const newImage: DesignElement = {
            id: `image-${Date.now()}`,
            type: 'image',
            x: 100,
            y: 100,
            width: 100,
            height: 100 * (img.height / img.width),
            src: event.target?.result as string,
          };
          const newElements = [...elements, newImage];
          setElements(newElements);
          setSelectedElement(newImage.id);
          addToHistory(newElements, newImage.id);
        };
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
      console.error(err);
    }
  };

  const updateElement = (id: string, updates: Partial<DesignElement>) => {
    try {
      const newElements = elements.map(el => 
        el.id === id ? { ...el, ...updates } : el
      );
      setElements(newElements);
      addToHistory(newElements, selectedElement);
    } catch (err) {
      setError('Failed to update element');
      console.error(err);
    }
  };

  const deleteElement = (id: string) => {
    try {
      const newElements = elements.filter(el => el.id !== id);
      setElements(newElements);
      setSelectedElement(null);
      addToHistory(newElements, null);
    } catch (err) {
      setError('Failed to delete element');
      console.error(err);
    }
  };

  const saveDesign = () => {
    try {
      const design = {
        elements,
        productColor,
        selectedProduct,
      };
      const designString = JSON.stringify(design);
      localStorage.setItem('saved_design', designString);
    } catch (err) {
      setError('Failed to save design');
      console.error(err);
    }
  };

  const loadDesign = () => {
    try {
      const savedDesign = localStorage.getItem('saved_design');
      if (savedDesign) {
        const design = JSON.parse(savedDesign);
        setElements(design.elements);
        setProductColor(design.productColor);
        setSelectedProduct(design.selectedProduct);
        addToHistory(design.elements, null);
      }
    } catch (err) {
      setError('Failed to load design');
      console.error(err);
    }
  };

  // Error display timeout
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const downloadDesign = () => {
    if (stageRef.current) {
      const uri = stageRef.current.toDataURL();
      const link = document.createElement('a');
      link.download = 'design.png';
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar - Tools */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Design Tools</h2>
        <DesignToolbar
          onAddText={addText}
          onAddShape={addShape}
          onImageUpload={handleImageUpload}
          onUndo={undo}
          onRedo={redo}
          onSave={saveDesign}
          onLoad={loadDesign}
          canUndo={currentStep > 0}
          canRedo={currentStep < history.length - 1}
        />
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Color
          </label>
          <ColorPicker
            color={productColor}
            onChange={setProductColor}
            colors={['white', 'black', 'gray', 'navy', 'red']}
          />
        </div>
      </div>

      {/* Main Content - Canvas */}
      <div className="flex-1 p-8">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Stage
            ref={stageRef}
            width={selectedProduct.printArea.width + 40}
            height={selectedProduct.printArea.height + 40}
            className="border border-gray-200"
          >
            <Layer>
              <ProductView
                product={selectedProduct}
                color={productColor}
              />
              {elements.map((element) => {
                const isSelected = element.id === selectedElement;
                
                switch (element.type) {
                  case 'text':
                    return (
                      <Text
                        key={element.id}
                        text={element.text}
                        x={element.x}
                        y={element.y}
                        fontSize={element.fontSize}
                        fill={element.fill}
                        draggable
                        onClick={() => setSelectedElement(element.id)}
                        onDragEnd={(e: KonvaEventObject<DragEvent>) => {
                          updateElement(element.id, {
                            x: e.target.x(),
                            y: e.target.y(),
                          });
                        }}
                        onTransformEnd={(e: KonvaEventObject<Event>) => {
                          const node = e.target;
                          updateElement(element.id, {
                            rotation: node.rotation(),
                            width: node.width() * node.scaleX(),
                            height: node.height() * node.scaleY(),
                          });
                        }}
                      />
                    );
                  case 'image':
                    return (
                      <KonvaImage
                        key={element.id}
                        image={new window.Image()}
                        x={element.x}
                        y={element.y}
                        width={element.width}
                        height={element.height}
                        draggable
                        onClick={() => setSelectedElement(element.id)}
                        onDragEnd={(e: KonvaEventObject<DragEvent>) => {
                          updateElement(element.id, {
                            x: e.target.x(),
                            y: e.target.y(),
                          });
                        }}
                      />
                    );
                  case 'shape':
                    return (
                      <Rect
                        key={element.id}
                        x={element.x}
                        y={element.y}
                        width={element.width}
                        height={element.height}
                        fill={element.fill}
                        draggable
                        onClick={() => setSelectedElement(element.id)}
                        onDragEnd={(e: KonvaEventObject<DragEvent>) => {
                          updateElement(element.id, {
                            x: e.target.x(),
                            y: e.target.y(),
                          });
                        }}
                      />
                    );
                }
              })}
              {selectedElement && (
                <Transformer
                  boundBoxFunc={(oldBox, newBox) => {
                    newBox.width = Math.max(5, newBox.width);
                    newBox.height = Math.max(5, newBox.height);
                    return newBox;
                  }}
                />
              )}
            </Layer>
          </Stage>
        </div>
      </div>

      {/* Right Sidebar - Properties */}
      <div className="w-64 bg-white border-l border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Properties</h2>
        {selectedElement && (
          <div className="space-y-4">
            <TextControls
              element={elements.find(el => el.id === selectedElement)}
              onChange={(updates) => updateElement(selectedElement, updates)}
            />
            <button
              onClick={() => deleteElement(selectedElement)}
              className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete Element
            </button>
          </div>
        )}
        <button
          onClick={downloadDesign}
          className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download Design
        </button>
      </div>
    </div>
  );
} 