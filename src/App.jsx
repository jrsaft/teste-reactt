import "./App.css";

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline bg-amber-600">Hello world!</h1>
      <a href="https://tailwindcss.com/docs/installation/using-vite"><button className="uppercase bg-green-600 md:bg-red-400 rounded-sm p-2">Me clique-me</button></a>
      <form action="https://getform.io/f/bkknxwqb" method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        {/* add hidden Honeypot input to prevent spams */}
        <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />
        {/* checkbox handle */}
        <input
          type="checkbox"
          name="subscribe"
          defaultValue="yes"
          defaultChecked=""
        />
        <input type="hidden" name="subscribe" defaultValue="no" />
        {/* radio button handle */}
        <input type="radio" name="gender" defaultValue="male" defaultChecked="" />
        <input type="radio" name="gender" defaultValue="female" />
        <input type="radio" name="gender" defaultValue="other" />
        {/* select field handle */}
        <select name="work-experience">
          <option value="one-year">0-1 years</option>
          <option value="one-five-years">1-5 years</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
