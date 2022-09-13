import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Socials() {
return (
    <div className="footer-link footer-right">
      <a href="mailto:89cpetersen@gmail.com">
        <EmailOutlinedIcon />
      </a>
      <a href="mailto:mkuzminer1@gmail.com">
        <EmailOutlinedIcon />
      </a>
      <a
        href="https://www.instagram.com/mandc_photography/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
