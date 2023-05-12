import { ThreeDots } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

export default function Loader({ color }) {
  const theme = useTheme();

  return (
    <ThreeDots
      height="20"
      width="100%"
      radius="9"
      color={color || `${theme.btnColor}`}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
