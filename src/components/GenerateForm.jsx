import {Button, ControlGroup, FormGroup, Intent, TextArea} from "@blueprintjs/core";
import {SITE_BASE_URL} from "../config/constants";
import PropTypes from 'prop-types';

export const DataId = 'qr-generate-data';

export default function GenerateForm({ onGenerateClick }) {
  return (
    <div>
      <FormGroup helperText="Data you'd like to encode as a QR"
                 label="Data"
                 labelInfo="(required)"
                 labelFor={DataId}>
        <TextArea id={DataId} intent={Intent.PRIMARY} defaultValue={SITE_BASE_URL} />
      </FormGroup>
      <ControlGroup>
        <Button icon="build" onClick={onGenerateClick} large>Generate</Button>
      </ControlGroup>
    </div>
  )
}

GenerateForm.propTypes = {
  onGenerateClick: PropTypes.func,
}
GenerateForm.defaultProps = {
  onGenerateClick: () => {
    console.log(`Generate clicked: ${document.getElementById(DataId).value}`)
  },
}
