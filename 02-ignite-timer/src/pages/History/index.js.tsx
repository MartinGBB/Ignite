import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList, StatusContent } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>cycle.task</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>cycle.startDate.toISOString()</td>
                  <td>
                    {cycle.finishedDate && (
                      <StatusContent statusColor="green">
                        Concluido
                      </StatusContent>
                    )}

                    {cycle.interruptedDate && (
                      <StatusContent statusColor="red">
                        Interrompido
                      </StatusContent>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <StatusContent statusColor="yellow">
                        Em andamento
                      </StatusContent>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
