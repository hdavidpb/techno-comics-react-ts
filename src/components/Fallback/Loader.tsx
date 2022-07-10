interface IProps {
  width: string;
  height: string;

  backgroundColor: string;
}
const Loader = ({ width, height, backgroundColor }: IProps) => {
  return (
    <div className="fallback__container" style={{ backgroundColor }}>
      <img
        style={{ width, height }}
        src="https://media.giphy.com/media/vBjLa5DQwwxbi/giphy.gif"
        alt="Cargando..."
      />
    </div>
  );
};

export default Loader;
