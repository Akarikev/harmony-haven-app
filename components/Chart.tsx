import { emojiMood } from "@/data/emojis";
import { Videos } from "@/data/videos";
import React from "react";

function Chart() {
  return (
    <div>
      {emojiMood.map((item) => {
        return (
          <div key={item.rate}>
            {item.rate === item.rate ? item.emojiName : ""}
          </div>
        );
      })}
    </div>
  );
}

export default Chart;
