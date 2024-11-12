import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
function f(){ return(
// <?xml version="1.0" encoding="UTF-8"?>
// <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
// "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html xmlns="http://www.w3.org/1999/xhtml"
// xmlns:h="http://xmlns.jcp.org/jsf/html"
// xmlns:f="http://xmlns.jcp.org/jsf/core"
// xmlns:p="http://primefaces.org/ui"
//     >
    <html>
    <head>
        <link rel="stylesheet" href="main_style.css"/>
    </head>
<body>
<f:view>
    <h:head>
        <h:outputScript name="jakarta.faces/faces-uncompressed.js" />
    </h:head>
    <h:body>
        <div class="base">
            <header class="main_header">
                <h1 id="h1">Мартышов Данила Викторович, Р3207, Вариант 409091</h1>
            </header>
            <h:form id="data" action="get">
                <div class="q_entry">
                    <div>
                        <label>Изменение X</label>
                    </div>
                    <p:slider id="x_slider" for="ch_x" minValue="-5.0" maxValue="5.0" step="1">
                        <p:ajax process="ch_x"/>
                    </p:slider>
                    <h:inputText id="ch_x" value="#{pointBean.x}">
                        <f:ajax event="change" render="@form"/>
                    </h:inputText>
                </div>
                <div class="q_entry">
                    <div><label>Изменение Y</label></div>
                    <h:inputText type="text" name="ch_y" placeholder="-5..5" id="data_ch_y" value="#{pointBean.y}">
                        <f:validateDoubleRange minimum="-5.0" maximum="5.0"/>
                        <f:validator validatorId="isNumberValidator"/>
                        <f:ajax event="change" render="@form"/>
                    </h:inputText>
                </div>
                <div class="q_entry" id='r_choice'>
                    <div>
                        <label>Изменение R</label>
                    </div>
                    <p:slider id="ch_r_slider" onSlideEnd="redraw()" for="ch_r" minValue="1" maxValue="4" step="0.25">
                        <p:ajax process="ch_r"/>
                    </p:slider>
                    <p:inputText id="ch_r" value="#{pointBean.r}">
                        <f:ajax event="change" render="graph ch_r_slider"/>
                    </p:inputText>
                </div>
                <h:commandButton id="submit_button" value="Submit" action="#{pointListBean.handle()}">
                    <f:ajax event="click" render="table"/>
                </h:commandButton>
                <h:commandButton id="clean_button" value="Clean" action="#{pointListBean.clean()}">
                    <f:ajax event="click" render="table"/>
                </h:commandButton>
            </h:form>
            <div id="graph_div">
                <canvas id="graph" width="400" height="400">
                </canvas>
            </div>
            <h:dataTable id="table" value="#{pointListBean.pointList}" var="point">
                <h:column>
                    <f:facet name="header" class="t_d">x</f:facet>
                    #{point.x}
                </h:column>
                <h:column>
                    <f:facet name="header" class="t_d">y</f:facet>
                    #{point.y}
                </h:column>
                <h:column>
                    <f:facet name="header" class="t_d">r</f:facet>
                    #{point.r}
                </h:column>
                <h:column>
                    <f:facet name="header" class="t_d">hit</f:facet>
                    #{point.hit}
                </h:column>
            </h:dataTable>
            <h:form id="goBackForm">
                <h:commandButton id="redirectButton" value="Go back" action="index"/>
            </h:form>
        </div>
    </h:body>
</f:view>
<h:outputScript  name="graph.js"/>
</body>
</html>
)}