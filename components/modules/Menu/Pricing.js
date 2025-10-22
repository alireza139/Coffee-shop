import React from "react";
import Card from "@/components/modules/Card/Card";

function Pricing({ data, length }) {
  const hotCoffees = data?.filter(coffee => coffee.type === "hot").slice(0, length);
  const coldCoffees = data?.filter(coffee => coffee.type === "cold").slice(0, length);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Menu &amp; Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {hotCoffees && hotCoffees.length > 0 ? (
              hotCoffees.map(coffee => <Card key={coffee.id} {...coffee} />)
            ) : (
              <h4 className="text-muted">No hot coffee found</h4>
            )}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {coldCoffees && coldCoffees.length > 0 ? (
              coldCoffees.map(coffee => <Card key={coffee.id} {...coffee} />)
            ) : (
              <h4 className="text-muted">No cold coffee found</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
