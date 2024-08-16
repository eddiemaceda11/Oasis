const CircularProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="relative flex items-center justify-center h-24 w-24">
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          background: `conic-gradient(#3bd1f6 ${progress}%, #e5e7eb ${progress}%)`,
          borderRadius: "50%",
          clipPath: "circle(50% at 50% 50%)",
        }}
      />
      <div className="absolute flex items-center justify-center h-16 w-16 bg-white rounded-[50%]">{progress}%</div>
    </div>
  );
};

export default CircularProgress;
