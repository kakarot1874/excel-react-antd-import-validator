import { createContainer } from "unstated-next";
import useExcelValidator from "../hooks/useExcelValidator";

const ExcelValidatorContainer = createContainer(useExcelValidator);

export { ExcelValidatorContainer };