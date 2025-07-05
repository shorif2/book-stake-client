import React from "react";

const Stats = () => {
  return (
    <div className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="heading-lg mb-4">Library Statistics</h2>
          <p className="text-muted-foreground">
            Real-time insights into our growing library
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground font-medium">
              Books Available
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">25</div>
            <div className="text-muted-foreground font-medium">Categories</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-success">150</div>
            <div className="text-muted-foreground font-medium">
              Active Borrows
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-warning">98%</div>
            <div className="text-muted-foreground font-medium">
              Availability Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
