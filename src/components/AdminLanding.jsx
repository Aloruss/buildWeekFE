import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const AdminLanding = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='buttons'>
        <div className='icon_img'>
          <Button
            className='btn '
            variant='danger'
            onClick={() => navigate("/admin/landing/addandi")}
          >
            Add ANDI
          </Button>
        </div>
        <div className='icon_img'>
          <Button
            className='btn'
            variant='danger'
            onClick={() => navigate("/admin/landing/addclient")}
          >
            Add Client
          </Button>
        </div>
        <div className='icon_img'>
          <Button
            className='btn'
            variant='danger'
            onClick={() => navigate("/admin/landing/addproject")}
          >
            Add Project
          </Button>
        </div>
        <div className='icon_img'>
          <Button className='btn' variant='danger'>
            Allocate Andi
          </Button>
        </div>
      </div>
    </>
  );
};
