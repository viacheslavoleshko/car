<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class DvlaController extends Controller
{
    public function fill()
    {
        set_time_limit(0);
        
        $area_location = array(
            'Anglia' => array( 
                'Peterborough' => self::prefix('A', 0, 13),
                'Norwich' => self::prefix('A', 13, 6),
                'Ipswich' => self::prefix('A', 19, 4),
            ),
            'Birmingham' => array( 
                'Birmingham' => self::prefix('B', 0),
            ),
            'Cymru' => array( 
                'Cardiff' => self::prefix('C', 0, 14),
                'Swansea' => self::prefix('C', 14, 6),
                'Bangor' => self::prefix('C', 20, 3),
            ),
            'Deeside to Shrewsbury' => array( 
                'Chester' => self::prefix('D', 0, 10),
                'Shrewsbury' => self::prefix('D', 10, 13),
            ),
            'Essex' => array( 
                'Chelmsford' => self::prefix('E', 0),
            ),
            'Forest & Fens' => array( 
                'Nottingham' => explode(" ", "FA FB FC FD FE FF FG FH FJ FK FL FM FN FP"), 
                'Lincoln' => explode(" ", "FR FS FT FV FW FX FY"), 
            ),
            'Garden of England' => array( 
                'Maidstone' => self::prefix('G', 0, 14),
                'Brighton' => self::prefix('G', 14, 9),
            ),
            'Hampshire & Dorset' => array( 
                'Bournemouth' => self::prefix('H', 0, 9),
                'Brighton' => self::prefix('H', 9, 14),
            ),
            NULL => array( 
                'Borehamwood' => self::prefix('K', 0, 11),
                'Northampton' => self::prefix('K', 11, 12),
            ),
            'London' => array( 
                'Wimbledon' => self::prefix('L', 0, 9),
                'Borehamwood' => self::prefix('L', 9, 9),
                'Sidcup' => self::prefix('L', 18, 5),
            ),
            'Manchester & Merseyside' => array( 
                'Chelmsford' => self::prefix('M', 0),
            ),
            'North' => array( 
                'Newcastle' => explode(" ", "NA NB NC ND NE NG NH NJ NK NL NM NN NO"),
                'Stockton' => self::prefix('N', 14, 9),
            ),
            'Oxford' => array( 
                'Oxford' => self::prefix('O', 0),
            ),
            'Preston' => array( 
                'Preston' => self::prefix('P', 0, 18),
                'Carlisle' => self::prefix('P', 18, 5),
            ),
            'Reading' => array( 
                'Theale' => self::prefix('R', 0),
            ),
            'Scotland' => array( 
                'Glasgow' => self::prefix('S', 0, 9),
                'Edinburgh' => self::prefix('S', 9, 5),
                'Dundee' => self::prefix('S', 14, 4),
                'Aberdeen' => self::prefix('S', 18, 3),
                'Inverness' => self::prefix('S', 21, 2),
            ),
            'Severn Valley' => array( 
                'Worcester' => self::prefix('V', 0),
            ),
            'West of England' => array( 
                'Exeter' => self::prefix('W', 0, 9),
                'Truro' => self::prefix('W', 9, 2),
                'Bristol' => self::prefix('W', 11, 12),
            ),
            'Yorkshire' => array( 
                'Leeds' => self::prefix('Y', 0, 10),
                'Sheffield' => self::prefix('Y', 10, 9),
                'Beverley' => self::prefix('Y', 19, 4),
            ),
        );

        foreach($area_location as $area => $location) {
            foreach($location as $location => $regs) {
                foreach($regs as $reg) {
                    $query = DB::table('dvla')
                    ->insert([
                        ['first_reg' => $reg, 'location' => $location, 'area' => $area],
                    ]);
                }
            }
        }
        if($query) {
            echo "Done";
        } else {
            echo "Query did not execute";
        }
        
    }

    public function prefix($value, $offset, $length = NULL)
    {
        $tags = explode(" ", "A B C D E F G H J K L M N O P R S T U V W X Y");
        foreach(array_slice($tags, $offset, $length) as $tag) {
            $tag = $value . $tag;
            $result[] = $tag;
        }
        return $result;
    }
}
