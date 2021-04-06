import "./App.css";
import { toast } from "react-toastify";
import ReactCountUp from "./components/react-countup/ReactCountUp";
import ReactIcons from "./components/react-icons/ReactIcons";
import ReactModal from "./components/react-modal/ReactModal";
import ReactTippy from "./components/react-tippy/ReactTippy";
import ReactToastify from "./components/react-toastify/ReactToastify";
import ReactIdleTimer from "./components/react-idle-timer/ReactIdleTimer";
import ReactColor from "./components/react-color/ReactColor";
import ReactCreditCards from "./components/react-credit-cards/ReactCreditCards";
import ReactDatePicker from "./components/react-datepicker/ReactDatePicker";
import ReactPlayer from "./components/react-player/ReactPlayer";
import ReactSpinners from "./components/react-spinners/ReactSpinners";
import LineChart from "./components/react-chart/LineChart";
import DoughnutChart from "./components/react-chart/DoughnutChart";
import BarChart from "./components/react-chart/BarChart";

toast.configure();

function App() {
  return (
    <div className="App">
      <h1>RPG-App</h1>
      <hr />
      <ReactIcons></ReactIcons>
      <hr />
      <ReactToastify></ReactToastify>
      <hr />
      <ReactModal></ReactModal>
      <hr />
      <ReactTippy></ReactTippy>
      <hr />
      <ReactCountUp></ReactCountUp>
      <hr />
      <ReactIdleTimer></ReactIdleTimer>
      <hr />
      <ReactColor></ReactColor>
      <hr />
      <ReactCreditCards></ReactCreditCards>
      <hr />
      <ReactDatePicker></ReactDatePicker>
      <hr />
      <ReactPlayer></ReactPlayer>
      <hr />
      <ReactSpinners></ReactSpinners>
      <hr />
      <div className="chart">
        <LineChart></LineChart>
        <DoughnutChart></DoughnutChart>
        <BarChart></BarChart>
      </div>
    </div>
  );
}

export default App;
