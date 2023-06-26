/* eslint-disable react/prop-types */

export const CardButton = ({ components, texts, columns = '2' }) => {
  return (
    <div className={`w-full grid grid-cols-${columns} gap-10`}>
      {components.map((component, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <code className="font-mono text-gray-3 whitespace-nowrap">{texts[index]}</code>
          {component}
        </div>
      ))}
    </div>
  )
}
