import React from 'react';
import Exercises from './Exercises';
import TechWriter from './TechWriter';

const Technology = () => {
    return (
        <div className="container mx-auto my-5">
            <div class="md:flex gap-x-9 gap-y-9" >
  <div class="md:w-1/2 mb-6 md:mb-0">
      <Exercises/>
  </div>
  <div class="md:w-1/2">
  <div class="mockup-code text-left">
  <pre data-prefix="$"><code>some TechNology</code></pre> 
  <pre data-prefix=">" class="text-warning"><code>
        <TechWriter/>
      </code></pre> 
  <pre data-prefix=">" class="text-success"><code>
  process.env.ACCESS_TOKEN_SECRET
      </code></pre>
  <pre data-prefix=">" class="text-warning"><code>
   await userCollection.updateOne(filter, updateDoc, options)
      </code></pre> 
  <pre data-prefix=">" class="text-success"><code>
  service.slots.filter(slot === !bookedSlots.includes(slot))
      </code></pre>
  <pre data-prefix=">" class="text-warning"><code>
  DataSource.removeChangeListener(this.handleChange);
      </code></pre> 
  <pre data-prefix=">" class="text-success"><code>
  this.$el.off('change', this.handleChange);
      </code></pre>
  <pre data-prefix=">" class="text-warning"><code>
  this.reactRoot = ReactDOM.createRoot(this.el);
      </code></pre> 
  <pre data-prefix=">" class="text-success"><code>
  container = document.createElement("div");
      </code></pre>
  <pre data-prefix=">" class="text-warning"><code>
  unmountComponentAtNode(container);
      </code></pre> 
  <pre data-prefix=">" class="text-success"><code>
  expect(container.textContent).toContain(fakeUser.address);
      </code></pre>
  <pre data-prefix=">" class="text-warning"><code>
  () = this.tick(),
      </code></pre> 
  <pre data-prefix=">" class="text-success"><code>
  clearInterval(this.timerID);
      </code></pre>
 
</div>
  </div>
</div>
        </div>
    );
};

export default Technology;