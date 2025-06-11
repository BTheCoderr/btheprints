'use client';

import { Group, Rect, Shape } from 'react-konva';

interface ProductViewProps {
  product: {
    id: string;
    name: string;
    color: string;
    printArea: {
      width: number;
      height: number;
    };
  };
  color: string;
}

export default function ProductView({ product, color }: ProductViewProps) {
  // Calculate dimensions for the product outline
  const padding = 20;
  const totalWidth = product.printArea.width + (padding * 2);
  const totalHeight = product.printArea.height + (padding * 2);
  
  return (
    <Group>
      {/* Product Shadow */}
      <Rect
        x={padding + 5}
        y={padding + 5}
        width={product.printArea.width}
        height={product.printArea.height}
        fill="rgba(0,0,0,0.1)"
        shadowBlur={10}
        shadowOpacity={0.2}
      />
      
      {/* Product Background */}
      <Rect
        x={padding}
        y={padding}
        width={product.printArea.width}
        height={product.printArea.height}
        fill={color}
        strokeWidth={1}
        stroke="#ddd"
        cornerRadius={2}
      />
      
      {/* Print Area Indicator */}
      <Rect
        x={padding + 10}
        y={padding + 10}
        width={product.printArea.width - 20}
        height={product.printArea.height - 20}
        stroke="#666"
        strokeWidth={1}
        dash={[5, 5]}
        opacity={0.5}
      />
      
      {/* Product Outline */}
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          // Neck
          context.moveTo(totalWidth / 2 - 20, 0);
          context.lineTo(totalWidth / 2 + 20, 0);
          // Shoulders
          context.quadraticCurveTo(
            totalWidth - 30,
            padding,
            totalWidth - 30,
            padding + 50
          );
          // Body
          context.lineTo(totalWidth - 30, totalHeight - 30);
          context.lineTo(30, totalHeight - 30);
          context.lineTo(30, padding + 50);
          // Close back to neck
          context.quadraticCurveTo(
            30,
            padding,
            totalWidth / 2 - 20,
            0
          );
          context.closePath();
          context.strokeShape(shape);
        }}
        stroke="#999"
        strokeWidth={1}
        opacity={0.3}
      />
    </Group>
  );
} 