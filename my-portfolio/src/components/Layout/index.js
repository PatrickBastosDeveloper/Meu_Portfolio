import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss'

export default function Layout() {
  return (
  <div>
    <Sidebar />
    <div className="page">
        <span
          className="tags top-tags"
          style={ { fontWeight: 'bold', color: '#caf0f8ff' } }
        >
          &lt;body&gt;
        </span>

        <Outlet />

        <span
          className="tags bottom-tags"
          style={ { fontWeight: 'bold', color: '#0077b6ff', paddingBottom: 30 } }
        >
          &lt;/body&gt;
        <br />
          <span
            className="bottom-tag-html"
            style={ { fontWeight: 'bold', color: '#0077b6ff' } }
          >&lt;/html&gt;
          </span>
        </span>
    </div>
  </div>
  );
}
