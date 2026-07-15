const SectionDivider = ({
  title,
  alignment = "center",
  className = "",
  spacingTop,
  spacingBottom,
}) => {
  const style = {
    ...(spacingTop ? { ["--section-divider-gap-top"]: spacingTop } : {}),
    ...(spacingBottom ? { ["--section-divider-gap-bottom"]: spacingBottom } : {}),
  };

  return (
    <fieldset
      className={`section-divider section-divider--${alignment} ${className}`.trim()}
      style={style}
    >
      <legend className="section-divider__legend">
        <span className="section-divider__label">{title}</span>
      </legend>
    </fieldset>
  );
};

export default SectionDivider;