import ReactTooltip from 'react-tooltip';

export const links = [
  {
    key: 1,
    id: "twitter__account",
    href: "https://twitter.com/Chukwuaebuka",
    displayName: "Twitter Link",
  },
  {
    key: 2,
    id: "btn__zuri",
    href: "https://training.zuri.team/",
    displayName: "Zuri Team",
  },
  {
    key: 3,
    id: "books",
    href: "http://books.zuri.team/",
    dataTip: "Here you can find books on coding and design",
    displayName: "Zuri Books",
  },
  {
    key: 4,
    id: "book__python",
    href: "https://books.zuri.team/python-for-beginners?ref_id=<Chukwuaebuka>",
    dataTip: "For the best intro to Python, checkout this book",
    displayName: "Python Books",
  },
  {
    key: 5,
    id: "pitch",
    href: "https://background.zuri.team/",
    dataTip: "Here you can find out about our coders",
    displayName: "Background Check for Coders",
  },
  {
    key: 6,
    id: "book__design",
    href: "https://books.zuri.team/design-rules",
    dataTip: "Get you a really good rule book for design",
    displayName: "Design Books",
  },
  {
    key: 7,
    id: "contact",
    href: "/contact",
    displayName: "Contact Me",
  }
];

export default function Buttonlink({ dataTip, id, href, displayName }) {
  return (
    <a data-tip={dataTip} id={id} className="link" href={href}>
      {displayName}
      <ReactTooltip />
    </a>
  );
}
