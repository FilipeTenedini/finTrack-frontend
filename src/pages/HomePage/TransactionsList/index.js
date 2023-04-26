import { TransactionsArea, BalanceArea } from './style';
import Movement from '../Movement';

export default function TransactionsList({ movements, balance }) {
  return (
    <>
      <TransactionsArea>
        {movements.map((item, index) => (
          <Movement key={item + index} item={item} />
        ))}
      </TransactionsArea>
      <BalanceArea color={balance < 0 ? 'negative' : 'positive'}>
        <div>SALDO</div>
        <p>R$ {balance}</p>
      </BalanceArea>
    </>
  );
}
