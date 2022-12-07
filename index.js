const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};
const element = (
  <div className="social-container">
    <div className="content-container">
      <h1 class="social-heading">Social Buttons</h1>
      <div class="button-container">
        <Button className="like-button" buttonText="like" />
        <Button className="comment-button" buttonText="comment" />
        <Button className="share-button" buttonText="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
