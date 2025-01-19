export const Footer = () => (
  <footer className="flex justify-between py-6 mt-4 border-t">
    <p className="opacity-90">
      &copy; Copyright {new Date().getFullYear()} | Crafted with love in Jakarta
      to the world.
    </p>
    <p>
      Icons By{" "}
      <a
        href="https://svgl.app/"
        className="text-emerald-500"
        target="_blank"
        rel="noopener noreferer"
      >
        SVGL
      </a>{" "}
    </p>
  </footer>
)
