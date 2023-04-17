import { useContext } from "react";
import Header from "../../components/Header";
import { Summary } from "../../components/Summary";
import SearchForm from "./components/SearchFrom";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { TransactionsContext } from "../../contexts/TransactionsContext";


export default function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transactions => {
              console.log(dateFormatter.format(new Date(transactions.createdAt)))
              return (
                <tr key={transactions.id}>
                  <td width="40%">{transactions.description}</td>
                  <td>
                    <PriceHighLight variant={transactions.type}>
                      {transactions.type === "outcome" && "- "}
                      {priceFormatter.format(transactions.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                </tr>           
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}