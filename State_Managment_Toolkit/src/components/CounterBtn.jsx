import { useCounterStore } from "../store/counterStore.js"

function CounterBtn() {
    const { increase } = useCounterStore((state) => state.increase)
    const { decrease } = useCounterStore((state) => state.decrease)
  return (
    <div>CounterBtn</div>
  )
}

export default CounterBtn