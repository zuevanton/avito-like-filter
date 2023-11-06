export const Checkbox = ({checked, onChange}) => {
  return (
    <label>
      <input type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    </label>
  )
}