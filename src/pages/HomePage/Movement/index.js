import { Register } from './style';

export default function Movement({ item }) {
  return (
    <Register opColor={item.type}>
      <div>{item.data.slice(0, 5)}</div>
      <div>{item.desc}</div>
      <div> {item.opValue.toFixed(2).replace('.', ',')}</div>
    </Register>
  );
}
