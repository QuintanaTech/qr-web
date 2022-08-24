import GenerateForm, {DataId} from "./GenerateForm";
import OutputImage from "./OutputImage";
import {useMutation} from "@tanstack/react-query";
import generate from "../api/generate";
import {Spinner} from "@blueprintjs/core";
import {API_BASE_URL} from "../config/constants";
import isJson from "../helpers/isJson";
import {css, StyleSheet} from "aphrodite";

const srcFromData = data => `data:image/png;base64,${data.data.data}`;
const textValue = () => document.getElementById(DataId) ? document.getElementById(DataId).value : '';

const styles = StyleSheet.create({
  codeContainer: {
    padding: '0 20px',
    width: '100%',
  },
})

export default function GenerateFormContainer() {
  const imageMutation = useMutation(generate)
  const onGenerateClick = () => imageMutation.mutate(textValue())

  return (
    <>
      <GenerateForm onGenerateClick={onGenerateClick} />
      {imageMutation.isLoading && <Spinner />}
      {imageMutation.isSuccess && <OutputImage src={srcFromData(imageMutation.data)} />}
      {(imageMutation.isIdle || imageMutation.isError) && <OutputImage />}
      <div className={css(styles.codeContainer)}>
        <p>
          Sample Curl:<br />
          <code>curl -d &squot;{textValue()}&squot; \<br />
            -H 'Content-Type: {isJson(textValue()) ? 'application/json' : 'text/plain'}' \<br />
            -X POST {API_BASE_URL}/v1/qr</code>
        </p>
        <p>
          As image src url:<br />
          <code>{API_BASE_URL}/v1/qr.png?data={encodeURIComponent(textValue())}</code>
        </p>
      </div>
    </>
  )
}
