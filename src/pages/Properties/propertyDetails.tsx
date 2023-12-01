import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export function propertyDetails() {
  let { detailsProperty } = useParams();
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/properties/getAProperty/${detailsProperty}`)
      .then((res) => setProperties(res.data))
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);

  return (
    <div className="w-screen px-4 py-5 justify-content align-items">
      {error && <p className="text-danger">{error}</p>}
        {properties.matricula}
    </div>
  );
}
