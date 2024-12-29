const attributes=
    {
        "alignment": {
          "type": "string",
          "default": "center"
        },
        "purposeType": {
          "type": "string",
          "default": "test"
        },
        "colors": {
          "type": "object",
          "default": {
            "color": "black",
            "bg": "#B1C5A4"
          }
        },
        "uniqId": {
          "type": "string"
        },
        "containerBorder": {
          "type": "object",
          "default": {
            "borderStyle": "solid",
            "borderWidth": 1,
            "borderColor": "#000000"
          }
        },
        "counterItems":{
            "type":"array",
            "default":[
             
            ]
      
          },
        "containerBorderRadius": {
          "type": "number"
        },
        "containerBg": {
          "type": "string",
          "default": "#ffffff"
        },
        "containerIcon": {
          "type": "string",
          "default": "fa-star"
        },
    
        "iconSizes": {
          "type": "object",
          "default": {
            "desktop": 20,
            "tablet": 20,
            "mobile": 15
          }
        },
        "iconColor": {
          "type": "string",
          "default": "#000000"
        },
       
        "counterColor": {
          "type": "string",
          "default": "#000000"
        },
        "counterSizes": {
          "type": "object",
          "default": {
            "desktop": 20,
            "tablet": 20,
            "mobile": 15
          }
        },
        
        "counterTitleColor": {
          "type": "string",
          "default": "#000000"
        },
        "counterTitleSizes": {
          "type": "object",
          "default": {
            "desktop": 20,
            "tablet": 20,
            "mobile": 15
          }
        }
      }


export default attributes;