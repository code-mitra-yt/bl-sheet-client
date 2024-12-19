import { ListComponent } from "@/components";
import { FEATURES } from "@/constants";
import { FeatureType } from "@/types";

import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <div className="px-4 sm:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ListComponent
          data={FEATURES}
          renderItem={(item: FeatureType) => (
            <FeatureCard key={item.id} item={item} />
          )}
        />
      </div>
    </div>
  );
};

export default Features;
