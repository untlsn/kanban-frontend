function Title(props: { children: any }) {
  return (
    <h1 className="p-(y-4 x-8) w-full bg-primary dark:bg-dark-primary border-(t-2 l-2 gray-500/10) h-17 uppercase text-2xl">
      {props.children}
    </h1>
  );
}

export default Title;
