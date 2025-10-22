const ScrollingText = () => {
  const text = "We help African Artists collect royalties from TV and radio channels • Digital and advanced system • ";
  
  return (
    <div className="bg-primary text-primary-foreground py-4 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="animate-scroll flex">
          <span className="text-xl md:text-2xl font-bold px-4">{text.repeat(3)}</span>
        </div>
        <div className="animate-scroll flex">
          <span className="text-xl md:text-2xl font-bold px-4">{text.repeat(3)}</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
