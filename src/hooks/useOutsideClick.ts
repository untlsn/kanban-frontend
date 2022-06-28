const useOutsideClick = (event: () => void) => {
  const clicked = useRef(false);

  // add to onClick of wrapper
  const click = () => {
    clicked.current = true;
  };

  useEffect(() => {
    const evLis = () => {
      if (!clicked.current) {
        event();
      } else {
        clicked.current = false;
      }
    };

    document.addEventListener('click', evLis);

    return () => document.removeEventListener('click', evLis);
  }, []);

  return click;
};

export default useOutsideClick;
