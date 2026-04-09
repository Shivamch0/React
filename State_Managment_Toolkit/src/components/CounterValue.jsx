import { useCounterStore } from "../store/counterStore.js"

function CounterValue() {
    const {count} = useCounterStore((state) => state.count)
  return (
    <div>Count : {count}</div>
  )
}

export default CounterValue