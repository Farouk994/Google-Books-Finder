import React from "react";

export const Header = () => {
  return (
    <div>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <br></br>
    </div>
  );
};

export default Header;
