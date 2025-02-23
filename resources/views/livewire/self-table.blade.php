<section>
    <div>
        {{$this->table}}
    </div>
    <div class="flex justify-end">
        @if($totMax !== 0 )
            <h5 class="font-bold mt-8" style="margin-top:20px" >
                <span>
                  {{$persons[0]->name}}'s compatability w.r.t {{$persons[1]->name}} :
                </span>
                <span>
{{--                    {{round($totAdj / $totMax * 100)}} %--}}
                    {{round($individualMatch)}} %
                </span>

            </h5>
        @endif
    </div>
</section>
