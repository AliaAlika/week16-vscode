
function selectModel() {
    let select = document.getElementById('brand-select'); 
    let selectedValue = select.options[select.selectedIndex].value;
    let selectedModel = document.getElementById("model-select");
    if(select.selectedIndex= [1]) {
    selectedValue ="alfa-romeo";
     
    let option1 = new Option("156", "156");
    selectedModel.append(option1);
    let option2 = new Option("159", "159");
    selectedModel.append(option2);
    }
} 







/*<option value="156">156</option>  
<option value="159">159</option>
<option value="nexia">Nexia</option>
<option value="tacuma">Tacuma</option>
<option value="polo">Polo</option>
<option value="touareg">Touareg</option>*/