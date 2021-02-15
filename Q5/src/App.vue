<template>
  <div>
    <div style="background-color:#0442D0;height: 10vh;"> </div>
    <div class="row">
      <div class="column">
        <div class="greet">
          <div class="row">
            <div class="columnG">

            </div>
            <div class="columnG2">
              <h2 style="color:#FABE2C">
                Hallo, Sam!
              </h2>
              <h3 style="color:#FFFFFF; margin-top: 10px;">
                You have 2 tasks left for today, Already completed Task Today?
              </h3>

            </div>
          </div>

        </div>
      </div>
      <div class="column2">
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
    </div>
  </div>
</template>

<script>
import datepicker from 'js-datepicker';

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0 ;
}

.greet{
  flex: 30%;
  padding: 10px;
  height: 20vh; /* Should be removed. Only for demonstration */
  background-color:#0442D0;
  border-radius: 20px;
}

.row {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 40%;
  padding: 50px 50px 50px;
  height: 90vh; /* Should be removed. Only for demonstration */
  background-color:#FBFCFF;
}
.column2 {
  flex: 60%;
  padding: 10px;
  height: 90vh; /* Should be removed. Only for demonstration */
  background-color:#FBFCFF;
}
.columnG {
  flex: 40%;
  padding: 10px 10px;
  height: 90vh; /* Should be removed. Only for demonstration */
}
.columnG2 {
  flex: 60%;
  padding: 10px 10px;
  height: 90vh; /* Should be removed. Only for demonstration */
}
</style>
