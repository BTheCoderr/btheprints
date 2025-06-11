'use client';

interface TextControlsProps {
  element: {
    text?: string;
    fontSize?: number;
    fill?: string;
  } | undefined;
  onChange: (updates: {
    text?: string;
    fontSize?: number;
    fill?: string;
  }) => void;
}

export default function TextControls({ element, onChange }: TextControlsProps) {
  if (!element || !element.text) return null;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Text
        </label>
        <input
          type="text"
          value={element.text}
          onChange={(e) => onChange({ text: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Font Size
        </label>
        <input
          type="number"
          value={element.fontSize}
          onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
          min={8}
          max={72}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Color
        </label>
        <input
          type="color"
          value={element.fill}
          onChange={(e) => onChange({ fill: e.target.value })}
          className="w-full h-10"
        />
      </div>
    </div>
  );
} 