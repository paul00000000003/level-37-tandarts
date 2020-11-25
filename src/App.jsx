import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './app.css'
import Home from './Home'
import Day from './Day'
import Contact from './Contact'
import Theedrinken from './Theedrinken'
import generateRandomAppointments from './klantendb'
import {names} from './klantendb'
import Calendar from './Calendar' 

let dentistArray=[]
let assistentenArray=[]
let patientenArray=[]
let appointments=[]
let max_time = 19
let min_time =  7

const addDentist = (firstName,surName,telnr,email,isSick) =>
{if (!dentistArray.includes({firstName:firstName,surName:surName,telnr:telnr,email:email,isSick:isSick}))
   dentistArray.push({firstName:firstName,surName:surName,telnr:telnr,email:email,isSick:isSick})
}

const addAssistent = (firstName,surName,telnr,email,isSick) =>
{if (!assistentenArray.includes({firstName:firstName,surName:surName,telnr:telnr,email:email,isSick:isSick}))
   assistentenArray.push({firstName:firstName,surName:surName,telnr:telnr,email:email,isSick:isSick})
}

const addPatient = (firstName,surName,gender,telnr,email,year_of_birth,isSick) =>
{if (!patientenArray.includes({firstName:firstName,surName:surName,gender:gender,telnr:telnr,email:email,year_of_birth:year_of_birth,isSick:isSick}))
   patientenArray.push({firstName:firstName,surName:surName,gender:gender,telnr:telnr,email:email,year_of_birth:year_of_birth,isSick:isSick})
}

const addAppointment = (id, day, time, patient, dentist, assistent, treatment) => 
{if (!appointments.includes({id:id,day:day,time: time,patient:patient,dentist:dentist,assistent:assistent,treatment:treatment}))
   appointments.push({id:id,day:day,time:time,patient:patient,dentist:dentist,assistent:assistent,treatment:treatment})
}

//const appointments = generateRandomAppointments(70);

addDentist("Toos", "Trekker", "06-12345678", "toos@tandartspraktijkbvt.nl","N")
addDentist("Piet","Klein","070-3765746","Piet@tandartspraktijkbvt.nl","N")
addDentist("Luc","Jansen","06-45463546","Luc@tandartspraktijkbvt.nl","N")
addDentist("Marjolein","Timmermans","070-7876545","Marjonlein@tandartspraktijkbvt.nl","N")

addAssistent("Jaap","de Boer",           "070-8867754","jaap@tandarspraktijkbvt.nl","N")
addAssistent("Mies","Boermans",          "070-3311234","mies@tandartspraktijkbvt.nl","N")

addPatient("Mies","Boermans","F",        "070-331312344","miesboermans@yahoo.com",1967,"N")
addPatient("Jaap","Spruijt","M",         "070-3351354","jaapspruijt@planet.nl",1972,"N")
addPatient("Kees","Bouterse","M",        "070-3313389","keesbouterse@planet.nl",1962,"N")
addPatient("Pim","van Mierlo","M",       "070-3313333","pimvanmierlo@yahoo.nl",1973,"N")
addPatient("Marlies","van der Drift","F","070-3123487","marliesvanderdrift@kpn.nl",1985,"N")
addPatient("Frederique","Staphorst","F", "070-3313354","frederiquestaphorst@yahoo.nl",1993,"N")
addPatient("Marlous","Jansen","F",       "070-3313324","marlousjansen@telfort.nl",2001,"N")
addPatient("Mariza","van der Flap","F",  "070-3455454","marizavanderflap@ziggo.nl",1999,"N")
addPatient("Paul","op den Duur","M",       "070-3372346","paulopdenduur@ziggo.nl",1988,"N")
addPatient("Mirjam","van der Garderen","M","070-9862474","mirjamvandergarderen@ziggo.nl",1956,"N")
addPatient("Peter","van 't Hart","M",      "070-3323434","petervanhethart@planet.nl",2012,"N")
addPatient("Frank","op den Duur","M",      "070-3314123","frankopdenduur@planet.nl",2001,"N")
addPatient("Wil","Suikerhart","M",         "070-3391231","wilsuikerhart@yahoo.nl",1999,"N")
addPatient("Pim","Pietersen","M",          "070-3311111","pimpietersen@ziggo.nl",1965,"N")
addPatient("Puk","Jansen","F",             "070-2323232","pukjansen@telfort.nl",1987,"N")
addPatient("Sjoerd","Jansen","M",          "070-3234343","sjoerdjansen@telfort.nl",1984,"N")
addPatient("Alexander","Jansen","M",       "070-3812311","alexanderjansen@telfort.nl",1983,"N")
addPatient("Gert","van Gelderen","M",      "070-3987654","gertvangelderen@ziggo.nl",1982,"N")
addPatient("Gert-Jan","van Gelderen","M",  "070-3234234","gertjanvangelderen@kpn.nl",1999,"N")
addPatient("Gertrude","van Gelderen","F",  "070-3888111","gertrudenvangelderen@kpn.nl",1974,"N")
addPatient("Roos","de Boer","F",           "070-2131121","roosdeboer@ziggo.nl",1977,"N")
addPatient("Aurelio","de Boer","M",        "070-1313223","aureliodeboer@planet.nl",1985,"N")
addPatient("Azucena","de Boer","F",        "070-2331223","azucendadeboer@ziggo.nl",1973,"N")
addPatient("Thais","Hilhorst","F",         "070-2323223","thaishilhorst@telfort.nl",1985,"N")
addPatient("Laura","Hilhorst","F",         "070-3223433","laurahilhorst@kpn.nl",1996,"N")
addPatient("Rob","Hilhorst","M",           "070-1111111","robhilhorst@yahoo.nl",1954,"N")
addPatient("Ronald","van 't Zout","M",     "070-8898898","ronaldvantzout@yahoo.nl",1992,"N")
addPatient("Frank-Jan","van 't Zout","M",  "070-8123433","frankjanvantzout@yahoo.nl",1989,"N")
addPatient("Jan-Frank","van 't Zout","M",  "070-9090909","janfrankvantzout@yahoo.nl",1988,"N")
addPatient("Piet-Jan","Peperen","M",       "070-3665443","pietjanpeperen@kpn.nl",1986,"N")
addPatient("Ton","van Peperen","M",        "070-1121121","tonvanpeperen@ziggo.nl",1998,"N")
addPatient("Tom","Walboomers","M",         "070-2232232","tomwalboomers@telfort.nl",1973,"N")
addPatient("Jan-Pieter","Walboomers","M",  "070-4454454","janpieterwalboomers@ziggo.nl",1972,"N")
addPatient("Olivier","van der Giessen","M","070-3918273","oliviervandergiessen@yahoo.nl",1978,"N")
addPatient("Ans","van der Giessen","F",    "070-7273745","ansvandergiessen@eigenbedrijf.nl",1999,"N")
addPatient("Melanie","van der Giessen","F","070-8898871","melanievandergiessen@jansen.com",1981,"N")
addPatient("Vivien","van der Giessen","F", "070-4567686","vivienvandergiessen@ziggo.nl",1982,"N")
addPatient("Sjaak","'t Gooi","M",          "070-8547324","sjaaktgooi@telfort.nl",1983,"N")
addPatient("Ronaldus","'t Gooi","M",       "070-7341134","ronaldustgooi@telfort.nl",1967,"N")
addPatient("Rens","van Monnickendam","M",  "070-9876598","rensvanmonnickendam@jansen.nl",1966,"N")
addPatient("Ad","van Monnickendam","M",    "070-9909909","advanmonnickendam@jansen.nl",1968,"N")
addPatient("Aart","Gieter","M",            "070-3234323","aartgieter@vandercroft.com",1969,"N")
addPatient("Mien","Gieter","F",            "070-3457654","miengieter@vandercroft.nl",1999,"N")
addPatient("Roos","Gieter","F",            "070-8345134","roosgieter@kpn.nl",1982,"N")
addPatient("Marije","Gieter","F",          "070-2342343","marijegieter@telfort.nl",1983,"N")
addPatient("Merel","Dacoron","F",          "070-3423434","mereldacoron@telfort.nl",1985,"N")
addPatient("Jan-Jaap","Dacoron","M",       "070-7452323","janjaapdacoron@telfort.nl",1987,"N")
addPatient("Siegfried","Dacoron","M",      "070-2342343","siegfrieddacoron@telfort.nl",1984,"N")
addPatient("Karel","Dacoron","M",          "070-3123123","kareldacoron@yahoo.nl",1977,"N")
addPatient("Gert-Jan","Moedermans","M",    "070-8845537","gertjanmoerdermans@yahoo.nl",1987,"N")

// In principe is het mogelijk om met de gegeven functie generateRandomAppointments een set van 150 appointments te 
// verkrijgen. Ik heb er echter voor gekozen om iedere keer van dezelfde appointments uit te gaan. Ik heb ze dus maar
// uitgeschreven. Dat geeft een standaard set voor de eerste week. Uitgangspunt is immers 150 afspraken met vier 
// tandartsen. Voor de afspraken wordt van een id uitgegaan. 

//addAppointment(1,dag,tijd,patient,dentist,assistent,treatment) 

addAppointment(1,1,7,"Mies Boermans" ,"Toos","","")
addAppointment(2,1,8,"Jaap Spruijt" ,"Toos","","")
addAppointment(3,1,9,"Kees Bouterse" ,"Toos","","")
addAppointment(4,10,"Pim van Mierlo","Toos","","")
addAppointment(5,11,"Marlies van der Drift","Toos"," ","")
addAppointment(6,12,"Frederique Staphorst" ,"Toos","","")
addAppointment(7,14,"Marlous Jansen" ,"Toos","","")
addAppointment(8,15,"Mariza van der Flap" ,"Toos","","")
addAppointment(9,2,7,"Paul op den Duur" ,"Toos","","")
addAppointment(10,2,8,"Mirjam van der Garderen" ,"Toos","","")
addAppointment(11,2,9,"Peter van 't Hart" ,"Toos","","")
addAppointment(12,2,10,"Frank op den Duur","Toos","","")
addAppointment(13,2,11,"Wil Suikerhart","Toos"," ","")
addAppointment(14,2,12,"Wil Suikerhart" ,"Toos","","")
addAppointment(15,2,14,"Pim Pietersen" ,"Toos","","")
addAppointment(16,2,15,"Puk Jansen" ,"Toos","","")
addAppointment(17,3,7,"Sjoerd Jansen","Toos","","")
addAppointment(18,3,8,"Alexander Jansen","Toos"," ","")
addAppointment(19,3,9,"Gert van Gelderen" ,"Toos","","")
addAppointment(20,3,10,"Gert-Jan van Gelderen","Toos","","")
addAppointment(21,3,11,"Gertrude van Gelderen","Toos"," ","")
addAppointment(22,3,12,"Roos de Boer" ,"Toos","","")
addAppointment(23,4,14,"Aurelio de Boer" ,"Toos","","")
addAppointment(24,4,15,"Azucena de Boer" ,"Toos","","")
addAppointment(25,4,7,"Thais Hilhorst","Toos","","")
addAppointment(26,4,8,"Laura Hilhorst","Toos"," ","")
addAppointment(27,4,9, "Laura Hilhorst","Toos","","")
addAppointment(28,4,10,"Rob Hilhorst","Toos","","")
addAppointment(29,4,11,"Rob Hilhorst","Toos","","")
addAppointment(30,4,12,"Ronald van 't Zout","Toos"," ","")
addAppointment(31,4,15,"Frank-Jan van 't Zout" ,"Toos","","")
addAppointment(32,4,16, "Piet-Jan Peperen","Toos","","")
addAppointment(33,5,11,"Ton van Peperen","Toos"," ","")
addAppointment(34,5,12,"Mariza van der Flap" ,"Toos","","")
addAppointment(35,5,14,"Mirjam van der Garderen","Toos","","")
addAppointment(36,5,15,"Frank op den Duur" ,"Toos","","")
addAppointment(37,5,7,"Tom Walboomers","Toos","","")
addAppointment(38,5,8,"Jaap Spruijt" ,"Toos"," ","")
addAppointment(39,5,7,"Paul op den Duur","Toos","","")
addAppointment(40,5,8,"Jan-Pieter Walboomers","Toos"," ","")

addAppointment(41,1,7,"Ton van Peperen" ,"Piet","","")
addAppointment(42,1,8,"Ton van Peperen" ,"Piet","","")
addAppointment(43,1,9, "Laura Hilhorst"  ,"Piet","","")
addAppointment(44,10, "Alexander Jansen"  ,"Piet","","")
addAppointment(45,11, "Laura Hilhorst"  ,"Piet"," ","")
addAppointment(46,12, "Rob Hilhorst","Piet","","")
addAppointment(47,14,"Peter van 't Hart" ,"Piet","","")
addAppointment(48,15,"Mies Boermans","Piet","","")
addAppointment(49,2,7,"Frederique Staphorst" ,"Piet","","")
addAppointment(50,2,8,"Marlous Jansen" ,"Piet","","")
addAppointment(51,2,9,"Mariza van der Flap" ,"Piet","","")
addAppointment(52,2,10, "Pim van Mierlo" ,"Piet","","")
addAppointment(53,2,11, "Paul op den Duur","Piet"," ","")
addAppointment(54,2,12, "Frank op den Duur","Piet","","")
addAppointment(55,2,14,"Pim Pietersen","Piet","","")
addAppointment(56,2,15, "Sjoerd Jansen","Piet","","")
addAppointment(57,3,7,"Gert van Gelderen","Piet","","")
addAppointment(58,3,8,"Gert-Jan van Gelderen"   ,"Piet"," ","")
addAppointment(59,3,9, "Gertrude van Gelderen"  ,"Piet","","")
addAppointment(60,3,10,"Roos de Boer","Piet","","")
addAppointment(61,3,11, "Marlies van der Drift" ,"Piet"," ","")
addAppointment(62,3,12, "Puk Jansen"    ,"Piet","","")
addAppointment(63,4,14,  "Aurelio de Boer"  ,"Piet","","")
addAppointment(64,4,15, "Azucena de Boer"    ,"Piet","","")
addAppointment(65,4,7,"Azucena de Boer" ,"Piet","","")
addAppointment(66,4,8, "Thais Hilhorst" ,"Piet"," ","")
addAppointment(67,4,9,"Ronald van 't Zout"  ,"Piet","","")
addAppointment(68,4,10, "Frank-Jan van 't Zout"  ,"Piet","","")
addAppointment(69,4,11,"Wil Suikerhart","Piet","","")
addAppointment(70,4,12,"Jaap Spruijt" ,"Piet"," ","")
addAppointment(71,4,15, "Piet-Jan Peperen","Piet","","")
addAppointment(72,4,16, "Piet-Jan Peperen"  ,"Piet","","")
addAppointment(73,5,11,"Mariza van der Flap"  ,"Piet"," ","")
addAppointment(74,5,12,"Mirjam van der Garderen" ,"Piet","","")
addAppointment(75,5,14,"Mies Boermans" ,"Piet","","")
addAppointment(76,5,15, "Alexander Jansen"  ,"Piet","","")
addAppointment(77,5,7,"Tom Walboomers","Piet","","")
addAppointment(78,5,8, "Peter van 't Hart" ,"Piet"," ","")
addAppointment(79,5,7, "Jan-Pieter Walboomers","Piet","","")
addAppointment(80,5,8, "Frank op den Duur" ,"Piet"," ","")

addAppointment(81,1,7,"Gert-Jan van Gelderen"  ,"Luc","","")
addAppointment(82,1,8, "Frank-Jan van 't Zout"   ,"Luc","","")
addAppointment(83,1,9, "Gertrude van Gelderen"   ,"Luc","","")
addAppointment(84,10, "Marlous Jansen" ,"Luc","","")
addAppointment(85,11,"Pim van Mierlo","Luc"," ","")
addAppointment(86,12,"Marlies van der Drift","Luc","","")
addAppointment(87,14, "Paul op den Duur","Luc","","")
addAppointment(88,15,"Mirjam van der Garderen" ,"Luc","","")
addAppointment(89,2,7, "Sjoerd Jansen"   ,"Luc","","")
addAppointment(90,2,8, "Frederique Staphorst","Luc","","")
addAppointment(91,2,9, "Peter van 't Hart"  ,"Luc","","")
addAppointment(92,2,10, "Pim Pietersen"  ,"Luc","","")
addAppointment(93,2,11,"Puk Jansen" ,"Luc"," ","")
addAppointment(94,2,12, "Gert van Gelderen"   ,"Luc","","")
addAppointment(95,2,14, "Kees Bouterse","Luc","","")
addAppointment(96,2,15, "Alexander Jansen"  ,"Luc","","")
addAppointment(97,3,7,"Kees Bouterse","Luc","","")
addAppointment(98,3,8, "Wil Suikerhart"  ,"Luc"," ","")
addAppointment(99,3,9,  "Sjoerd Jansen","Luc","","")
addAppointment(100,3,10,  "Aurelio de Boer"  ,"Luc","","")
addAppointment(101,3,11,  "Thais Hilhorst"  ,"Luc"," ","")
addAppointment(102,3,12, "Laura Hilhorst"  ,"Luc","","")
addAppointment(103,4,14,  "Piet-Jan Peperen"  ,"Luc","","")
addAppointment(104,4,15,"Azucena de Boer" ,"Luc","","")
addAppointment(105,4,7,"Rob Hilhorst","Luc","","")
addAppointment(106,4,8, "Ton van Peperen"  ,"Luc"," ","")
addAppointment(107,4,9,"Jaap Spruijt","Luc","","")
addAppointment(108,4,10,"Olivier van der Giessen","Luc","","")
addAppointment(109,4,11,"Olivier van der Giessen","Luc","","")
addAppointment(110,4,12, "Frank-Jan van 't Zout" ,"Luc"," ","")
addAppointment(111,4,15,"Mies Boermans","Luc","","")
addAppointment(112,4,16, "Ans van der Giessen","Luc","","")
addAppointment(113,5,11,"Roos de Boer","Luc"," ","")
addAppointment(114,5,12,"Melanie van der Giessen" ,"Luc","","")
addAppointment(115,5,14, "Melanie van der Giessen","Luc","","")
addAppointment(116,5,15,"Gert-Jan van Gelderen","Luc","","")
addAppointment(117,5,7,"Vivien van der Giessen","Luc","","")
addAppointment(118,5,8,"Vivien van der Giessen","Luc"," ","")
addAppointment(119,5,7,"Gert van Gelderen","Luc","","")
addAppointment(120,5,8, "Ronald van 't Zout"  ,"Luc"," ","")

addAppointment(121,1,7, "Puk Jansen" ,"Marjolein","","")
addAppointment(122,1,8, "Ton van Peperen"  ,"Marjolein","","")
addAppointment(123,1,9,"Marlous Jansen","Marjolein","","")
addAppointment(124,10, "Roos de Boer"   ,"Marjolein","","")
addAppointment(125,11, "Ton van Peperen" ,"Marjolein"," ","")
addAppointment(126,12,"Sjaak 't Gooi" ,"Marjolein","","")
addAppointment(127,14, "Aurelio de Boer"  ,"Marjolein","","")
addAppointment(128,15, "Marlies van der Drift","Marjolein","","")
addAppointment(129,2,7, "Frank-Jan van 't Zout" ,"Marjolein","","")
addAppointment(130,2,8,"Sjaak 't Gooi" ,"Marjolein","","")
addAppointment(131,2,9,"Pim van Mierlo","Marjolein","","")
addAppointment(132,2,10,"Thais Hilhorst" ,"Marjolein","","")
addAppointment(133,2,11, "Rens van Monnickendam"  ,"Marjolein"," ","")
addAppointment(134,2,12, "Rens van Monnickendam","Marjolein","","")
addAppointment(135,2,14, "Gertrude van Gelderen"  ,"Marjolein","","")
addAppointment(136,2,15, "Mien Gieter"   ,"Marjolein","","")
addAppointment(137,3,7,"Kees Bouterse","Marjolein","","")
addAppointment(138,3,8,  "Roos Gieter"   ,"Marjolein"," ","")
addAppointment(139,3,9,  "Marije Gieter"   ,"Marjolein","","")
addAppointment(140,3,10, "Marije Gieter"   ,"Marjolein","","")
addAppointment(141,3,11, "Frederique Staphorst" ,"Marjolein"," ","")
addAppointment(142,3,12,"Aart Gieter" ,"Marjolein","","")
addAppointment(143,4,14,"Aart Gieter" ,"Marjolein","","")
addAppointment(144,4,15,"Ad van Monnickendam" ,"Marjolein","","")
addAppointment(145,4,7,"Ad van Monnickendam","Marjolein","","")
addAppointment(146,4,8,"Ronaldus 't Gooi","Marjolein"," ","")
addAppointment(147,4,9,"Ronaldus 't Gooi" ,"Marjolein","","")
addAppointment(148,4,10,"Vivien van der Giessen","Marjolein","","")
addAppointment(149,4,11,"Vivien van der Giessen","Marjolein","","")
addAppointment(150,4,12,"Melanie van der Giessen","Marjolein"," ","")
addAppointment(151,4,15,"Melanie van der Giessen" ,"Marjolein","","")
addAppointment(152,4,16,"Ans van der Giessen","Marjolein","","")
addAppointment(153,5,11,"Ans van der Giessen","Marjolein"," ","")
addAppointment(154,5,12,"Olivier van der Giessen" ,"Marjolein","","")
addAppointment(155,5,14,"Olivier van der Giessen" ,"Marjolein","","")
addAppointment(156,5,15, "Ronald van 't Zout"  ,"Marjolein","","")
addAppointment(157,5,7,"Jan-Pieter Walboomers","Marjolein","","")
addAppointment(158,5,8,"Jan-Pieter Walboomers","Marjolein"," ","")
addAppointment(159,5,7,"Tom Walboomers" ,"Marjolein","","")
addAppointment(160,5,8,"Tom Walboomers","Marjolein"," ","")


class App extends Component {
    constructor(){super()
                  this.state={dentists :[],
                              assistenten : [],
                              patienten : [],
                              appointments : [],
                              dentist : ""
                            }
                    this.handleSelectTandarts=this.handleSelectTandarts.bind(this)
                  }
    
    handleSelectTandarts()
    {


    }
    
    componentDidMount()
    {
        //{this.addDentist("Toos", "Trekker", "06-12345678", "toos@tandartspraktijkbvt.nl")}
        this.setState({dentists: dentistArray})
        this.setState({assistenten : assistentenArray})
        this.setState({patienten:patientenArray})
        this.setState({appointments : appointments})
    }
    
    render() {
        names.forEach(element=>console.log(element.name))
        this.state.dentists.forEach(element=>console.log("tandarts : "+element.firstName+" "+element.surName))
        console.log("aantal tandartsen "+this.state.dentists.length)
        console.log("aantal assistenten "+this.state.assistenten.length)
        console.log("aantal patienten "+this.state.patienten.length)
        this.state.appointments.forEach(item =>console.log("dag :"+ item.day+"-time-"+item.time+"-patient-"+item.patient+"-tandarts- "+item.dentist+"-assistent- "+item.assistant))
        return (<Router>
            <div>
            <nav >
            <ul >
            <li > < Link to = { '/' } className = "nav-link" >home</Link></li >
            <li > < Link to = {'./calendar'} >calendar</Link></li>
            <li > < Link to = { '/day' } className = "nav-link" > day </Link></li >
            <li > < Link to = { '/contact' } className = "nav-link" > contact </Link></li >
            <li > < Link to = { '/theedrinken' } > thee drinken </Link></li >
            </ul> 
            </nav > 
            <hr / >
            <Switch >
            <Route exact path = '/' >
            <Home / >
            </Route>  
            <Route path = '/calendar' >
            <Calendar appointments={appointments} handleSelectTandarts={this.handleSelectTandarts} / >
            </Route>  
            <Route path = '/day' >
            <Day appointments={appointments.filter(app => app.day === 1)} / >
            </Route> 
            <Route path = '/theedrinken' >
            <Theedrinken / >
            </Route>   
            <Route path = '/contact' >
            <Contact / >
            </Route>   
            </Switch > 
            </div> 
            </Router>
        )
    }
}

export default App;