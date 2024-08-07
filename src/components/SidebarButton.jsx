export function SidebarButton({ children, variant }) {
  // Criar variações do botão
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-[#35383e]";
    }
    if (variant === "selected") {
      return "bg-[#e6f7f8] text-[#00adb5]";
    }
  };

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
}
