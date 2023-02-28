//All work performed entirely by Brett R. Gebbie
//brg078@gmail.com
//time spent on project in total: roughly 9-10hr, mostly dedicated to learning Nivo and massaging data
//what would I do next?
//type searchability on Table page as well as increasing/decreasing wins
//transform buttons and onClick fields for cleaner UX
//consult UX/UI specialist for optimizing data placement on the dom
//design fully consistent with ******* branding
//state management for when switching cards
//more responsive for mobile viewing

import "./styles.css";
import BasicTable from "./Table";

export default function App() {
  return (
    <div className="App">
      <img
        src="https://*******.ai/wp-content/themes/*******/dist/images/logo.svg"
        alt="******* Logo"
      />
      <h2>Scored Opportunities</h2>
      <BasicTable></BasicTable>
      <h5>Submitted by Brett R. Gebbie</h5>
      <h6>brg078@gmail.com</h6>
      <a href="https://www.linkedin.com/in/brett-gebbie-88a51619/">
        LinkedIn /
      </a>
      <a href="https://github.com/brg078">/ GitHub</a>
      <h6>
        Thank you for your consideration, roughly 9-10 hours coding time
        committed to this project.
      </h6>
    </div>
  );
}
