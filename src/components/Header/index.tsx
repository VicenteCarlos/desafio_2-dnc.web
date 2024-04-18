import { StyledHeader } from "@/components/Header/style";
import { mocksHeader } from "@/mocks";

export const Header = () => (
  <StyledHeader>
    <div id="container">
      <h1>DncWeather</h1>
      <nav>
        <ul>
          {mocksHeader.map((item, i) => (
            <li key={`item-header-${i}`}>
              <a href={item.id}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </StyledHeader>
);
