import { FaFont, FaSquare, FaCircle, FaImage, FaUndo, FaRedo, FaSave, FaFolderOpen } from 'react-icons/fa';

interface DesignToolbarProps {
  onAddText: () => void;
  onAddShape: (type: 'rectangle' | 'circle') => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUndo: () => void;
  onRedo: () => void;
  onSave: () => void;
  onLoad: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export default function DesignToolbar({
  onAddText,
  onAddShape,
  onImageUpload,
  onUndo,
  onRedo,
  onSave,
  onLoad,
  canUndo,
  canRedo
}: DesignToolbarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onAddText}
          className="flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          <FaFont className="mr-2" />
          Add Text
        </button>
        
        <button
          onClick={() => onAddShape('rectangle')}
          className="flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          <FaSquare className="mr-2" />
          Rectangle
        </button>
        
        <button
          onClick={() => onAddShape('circle')}
          className="flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          <FaCircle className="mr-2" />
          Circle
        </button>
        
        <label className="flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer">
          <FaImage className="mr-2" />
          Upload
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
          />
        </label>
      </div>

      <div className="flex justify-between border-t border-b border-gray-200 py-2">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className={`p-2 rounded ${
            canUndo ? 'text-black hover:bg-gray-100' : 'text-gray-400'
          }`}
        >
          <FaUndo />
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className={`p-2 rounded ${
            canRedo ? 'text-black hover:bg-gray-100' : 'text-gray-400'
          }`}
        >
          <FaRedo />
        </button>
        <button
          onClick={onSave}
          className="p-2 text-black hover:bg-gray-100 rounded"
        >
          <FaSave />
        </button>
        <button
          onClick={onLoad}
          className="p-2 text-black hover:bg-gray-100 rounded"
        >
          <FaFolderOpen />
        </button>
      </div>
    </div>
  );
} 