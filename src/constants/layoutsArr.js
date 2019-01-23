import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DeafultButton, CustomizedBadge, CircularDeterminate, ControlledOpenSelect, SimpleTooltips } from './../components/Comps';
    
const layoutsArr = [
        {  id:1,
        gridStructure: [
            {i: 'a', x: 0, y: 0, w: 3, h: 2, static: true, comps:[]},
            {i: 'b', x: 3, y: 0, w: 4, h: 2, static: true, comps:[]},
            {i: 'c', x: 7, y: 0, w: 1, h: 2, static: true, comps:[]},
            {i: 'd', x: 8, y: 0, w: 2, h: 2, static: true, comps:[]},
            {i: 'e', x: 0, y: 2, w: 1, h: 3, static: true, comps:[]},
            {i: 'f', x: 1, y: 2, w: 5, h: 2, static: true, comps:[]},
            {i: 'g', x: 6, y: 2, w: 2, h: 2, static: true, comps:[]},
            {i: 'h', x: 8, y: 2, w: 2, h: 3, static: true, comps:[]},
            {i: 'i', x: 1, y: 4, w: 7, h: 1, static: true, comps:[]},
          ],
          
        },{ id:2,
          gridStructure: [
              {i: 'a', x: 0, y: 0, w: 3, h: 3, static: true, comps:[],},
              {i: 'b', x: 3, y: 0, w: 4, h: 2, static: true, comps:[]},
              {i: 'c', x: 7, y: 0, w: 1, h: 2, static: true, comps:[]},
              {i: 'd', x: 8, y: 0, w: 2, h: 2, static: true, comps:[]},
              {i: 'e', x: 3, y: 2, w: 7, h: 3, static: true, comps:[]},
              {i: 'f', x: 0, y: 3, w: 3, h: 3, static: true, comps:[]},
              {i: 'g', x: 3, y: 5, w: 7, h: 1, static: true, comps:[]},

            ],
        },
            { id:3,
              gridStructure: [
                {i: 'a', x: 0, y: 0, w: 8, h: 3, static: true, comps:[]},
                {i: 'b', x: 8, y: 0, w: 2, h: 4, static: true, comps:[]},
                {i: 'c', x: 0, y: 3, w: 8, h: 1, static: true, comps:[]},
                {i: 'd', x: 0, y: 4, w: 10, h: 1, static: true, comps:[]},
                  ]},
            { id:4,
              gridStructure: [
                    {i: 'a', x: 0, y: 0, w: 6, h: 2, static: true, comps:[]},
                    {i: 'b', x: 6, y: 0, w: 4, h: 4, static: true, comps:[]},
                    {i: 'c', x: 0, y: 2, w: 6, h: 2, static: true, comps:[]},
                    {i: 'd', x: 0, y: 4, w: 10, h: 1, static: true, comps:[]},
                ]},
                { id:5,
                gridStructure: [
                    {i: 'a', x: 0, y: 0, w: 10, h: 3, static: true, comps:[]},
                    {i: 'b', x: 0, y: 3, w: 10, h: 1, static: true, comps:[]},
                    {i: 'c', x: 0, y: 4, w: 6, h: 1, static: true, comps:[]},
                    {i: 'd', x: 6, y: 4, w: 4, h: 1, static: true, comps:[]},
                ]},
                    { id:6,
                    gridStructure: [
                        {i: 'a', x: 0, y: 0, w: 3, h: 4, static: true, comps:[]},
                        {i: 'b', x: 3, y: 0, w: 7, h: 4, static: true, comps:[]},
                        {i: 'c', x: 0, y: 4, w: 5, h: 1, static: true, comps:[]},
                        {i: 'd', x: 5, y: 4, w: 5, h: 1, static: true, comps:[]},
                ]}
];

export default {layoutsArr};