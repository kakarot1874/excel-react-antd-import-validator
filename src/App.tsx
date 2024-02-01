import ColumnParamsEditor from "./components/ColumnParamsEditor";
import ExcelUploader from "./components/ExcelUploader";
import ProgressSteps from "./components/ProgressSteps";
import { ExcelValidatorContainer } from "./containers";

function App() {
  return (
    <ExcelValidatorContainer.Provider>
      <ColumnParamsEditor />
      <ProgressSteps />
      <ExcelUploader />
    </ExcelValidatorContainer.Provider>
  );
}

export default App;
