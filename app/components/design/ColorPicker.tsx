'use client';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  colors: string[];
}

export default function ColorPicker({ color, onChange, colors }: ColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`w-8 h-8 rounded-full border-2 ${
            color === c ? 'border-black' : 'border-gray-200'
          }`}
          style={{ backgroundColor: c }}
          aria-label={`Select ${c} color`}
        />
      ))}
    </div>
  );
} 