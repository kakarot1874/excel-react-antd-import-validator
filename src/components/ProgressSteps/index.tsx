import { ExcelValidatorContainer } from "../../containers";

const ProgressSteps = () => {
  const { state } = ExcelValidatorContainer.useContainer();
  return <>{state.currentStep}</>;
};
export default ProgressSteps;
