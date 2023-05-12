import { TransactionsArea, BalanceArea } from './style';
import Movement from '../Movement';

export default function TransactionsList({ movements, balance, setMovements }) {
  return (
    <>
      <TransactionsArea>
        {movements.map((item, index) => (
          <Movement key={item + index} item={item} setMovements={setMovements} />
        ))}
      </TransactionsArea>
      <BalanceArea color={balance < 0 ? 'negative' : 'positive'}>
        <div>SALDO</div>
        <p>R$ {balance && balance.toFixed(2).replace('.', ',')}</p>
      </BalanceArea>
    </>
  );
}
