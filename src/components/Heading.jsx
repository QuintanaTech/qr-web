import {css, StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center'
  },
})

export default function () {
  return (
    <div className={css(styles.heading)}>
      <h2 className="bp4-heading">QR Generation API</h2>
      <p>An API for generating QR codes</p>
    </div>
  )
}
