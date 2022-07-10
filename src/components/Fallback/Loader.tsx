interface IProps {
  widthImage: string;
  heightImage: string;
  heightContainer?: string;
  backgroundColor: string;
}
const Loader = ({
  widthImage,
  heightImage,
  backgroundColor,
  heightContainer,
}: IProps) => {
  return (
    <div
      className="fallback__container"
      style={{
        backgroundColor,
        height: heightContainer ? heightContainer : "100vh",
      }}
    >
      <img
        style={{ width: widthImage, height: heightImage }}
        src="https://media.giphy.com/media/vBjLa5DQwwxbi/giphy.gif"
        alt="Cargando..."
      />
    </div>
  );
};

export default Loader;
