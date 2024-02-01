import { useSetState } from "ahooks";
import { Columns, EProgressStep } from "../typings";

interface IState {
    columns: Columns[];
    loading: boolean;
    currentStep: EProgressStep;
}

const useExcelValidator = () => {
    const [state, setState] = useSetState<IState>({
        columns: [],
        loading: false,
        currentStep: EProgressStep.STEP_ONE,
    })

    return {
        state,
        changeState: setState,
    }
}
export default useExcelValidator;